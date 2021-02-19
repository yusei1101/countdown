const vm = new Vue({
    el: '#app',
    data: {
        countdown: '',
        content1: '',
        content2: '',
        inputCountdown: '',
        date: '',
        inputDate: ''
    },
    created(){
        setInterval(function(){
            //今の時間と指定した時間（ここでは2022年1月1日）の差分を求める。ミリ秒で取得する
            const diff = moment('2022/01/01').diff(moment());
            //ミリ秒からdurationオブジェクトを生成
            const duration = moment.duration(diff);
        
            let days = Math.floor(duration.asDays());
            let hours = duration.hours();
            let minutes = duration.minutes();
            let seconds = duration.seconds();
            
            hours = ('0' + hours).slice(-2)
            minutes = ('0' + minutes).slice(-2);
            seconds = ('0' + seconds).slice(-2);
            vm.countdown = `${days}日 ${hours}時間${minutes}分${seconds}秒`;
        })
    },
    methods: {
        countDown(){
            setInterval(function(){
                const diff = moment().diff(moment(vm.date));
                const duration = moment.duration(diff);

                let days = Math.floor(duration.asDays());
                let hours = duration.hours();
                let minutes = duration.minutes();
                let seconds = duration.seconds();
                
                hours = ('0' + hours).slice(-2)
                minutes = ('0' + minutes).slice(-2);
                seconds = ('0' + seconds).slice(-2);
                vm.inputCountdown = `${days}日 ${hours}時間${minutes}分${seconds}秒`;
                vm.content1 = 'あなたが生まれた日から'
                vm.content2 = '経過しました'
            })
        }
    }
})
