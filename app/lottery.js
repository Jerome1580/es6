import 'babel-polyfill';

import Base from './lottery/base.js';
import Timer from './lottery/timer.js';
import Calculate from'./lottery/calculate.js';
import Interface from './lottery/interface.js';

import $ from 'jQuery';

/*深度拷贝*/

const copyProperties = function (target, source) {
    /*拿到源对象的所有属性*/
    for (let key of Reflect.ownKeys(source)) {
        if (key != 'constructor' && key != 'prototype' && key != 'name') {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}

/*多重继承*/
const mix = function (...mixins) {
    class Mix {
    }
    for (let mixin of mixins) {
        copyProperties(Mix, mixins);
        copyProperties(Mix.prototype, mixins.prototype);
    }

    return Mix;
}


class Lottery extends mix(Base, Calculate, Interface, Timer) {
    //cname默认当前彩票种类，期号issue，状态state
    constructor(name = 'syy', cname = '11选5', issue = '**', state = '**') {
        super();
        this.name = name;
        this.cname = cname;
        this.issue = issue;
        this.state = stste;
        this.el = ''; //选择器
        this.omit = new Map();//遗漏
        this.open_code = new Set();//开奖号码
        this.open_code_list = new Set();//开奖号码记录
        this.play_list = new Map(); //玩法列表
        this.number = new Set();//选号
        this.issue_el = '#curr_issue';//期号的选择器
        this.countdown_el = '#countdown';
        this.state_el = '.state_el';
        this.cart_el = '.codeList';
        this.omit_el = '';
        this.cur_paly = 'r5';//当前默认玩法;
        this.initPlayList();
        this.initNumber();
        this.updateState();
        this.initEvent();

    }

    /**
     * 状态更新
     */
    updateState() {
        let self = this;//保存当前对象
        this.getState().then(function (res) {
            //获取状态,完成异步操作
            self.issue = res.issue;//拿到当前期号
            self.end_time = res.end_time;//拿到销售的截止时间
            self.state = res.state;//拿到状态

            $(self.issue_el).text(res.issue);

            //更新倒计时
            self.countdown(res.end_time, function (time) {
                $(self.countdown_el).html(time)
            }, function () {
                //当前时间超过截止时间，重新获取
                setTimeout(function () {
                    //更新状态
                    selt.updateState();
                    //重新获取当前最新的遗漏
                    self.getOmit(self.issue).then(function (res) {

                    });
                    //更新奖号
                    self.getOpenCode(self.issue).then(function (res) {

                    });
                }, 500)
            })

        })
    }

    /**
     * 初始化事件
     */
    initEvent() {
        let self = this;
        //玩法的切换
        //通过bind将changePlayNav方法的this指向当前对象上
        $('#paly').on('click', 'li', self.changePlayNav.bind(self));
        //号码的选中
        $('.boll-list').on('click', '.btn-boll', self.toggleCodeActive.bind(self));
        //添加的号码
        $('.confirm_sel_code').on('click', self.addCode.bind(self));
        //操作区大小奇偶清除事件
        $('.dxjo').on('click', 'li', self.assistHandle.bind(self));
        //随机号码
        $('.qkmethod').on('click', '.btn-middle', self.getRandomCode.bind(self));

    }

}

export default Lottery;

