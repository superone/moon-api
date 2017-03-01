<template>
    <div class="" m-com="public:grid">
        <div m-com="title">
            <span m-ref="title">{{title}}</span>
            <span m-com="menu"></span>
        </div>
        <div m-com="list">
            <ul>
                <li ref="item">{{item_content}}</li>
            </ul>
        </div>
    </div>
</template>

<script type="text/yaml">
    grid:{model:"data",on-show:"showed"}
        coms:
            -title:{model:"title"}
               coms:
                   -menu:{model:"menu"}
            -list:{model:"list as arr"}
               refs:
                  -item:{model:"title"}
                      repeat: "item in arr"
</script>

<script>
com1:{
     model-pipe : {
          title : {
            com2:"xiangying(this.model)"
          }
    }
}


    var Grid = moon.extend({
        init : function(){},
        methods:{
            showed(){
                console.log(this.model)
            }
        }
    });
    Gird.bind(grid);
</script>