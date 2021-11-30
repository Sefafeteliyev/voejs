new Vue({
    el: "#app",
    data: {
        show: false,
        monsterHeal: 100,
        userHeal: 100,
        x : 0,
        y : 0
    },
    

    methods: {
        
        attack() {
            let userPoint = Math.round(Math.random() * 10);
            this.monsterHeal -= userPoint;
            let monsterPoint = Math.round(Math.random() * 15);
            this.userHeal -= monsterPoint;
        },

        Sattack() {
           this.x++;
            if(this.x == 2){
                document.getElementById("btn").disabled = true; 
            }

            let userPoint = Math.round(Math.random() * 20);
            this.monsterHeal -= userPoint;
            let monsterPoint = Math.round(Math.random() * 15);
            this.userHeal -= monsterPoint;

        },

        Heal() {
            this.y++;
            if(this.y == 2){
                document.getElementById("can").disabled = true; 
            }
            let userPoint = Math.round(Math.random() * 10);
            this.userHeal += userPoint;
         
        },

leave() {
            this.userHeal = 0;
        }        
    },

  

})