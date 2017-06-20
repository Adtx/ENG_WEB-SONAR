if ('undefined' !== typeof module) {
    inNotify = true;
    type = ['','info','success','warning','danger'];
    module.exports = function initNotify(from, align){
        color = 1;//Math.floor((Math.random() * 4) + 1);
        if(inNotify){
            $.notify({
                icon: "pe-7s-headphones",
                message: "Bem-vindo ao SONAR!"
            },{
                type: type[color],
                timer: 1000,
                placement: {
                    from: from,
                    align: align
                }
            });
            inNotify = false;
        }
    }
}
