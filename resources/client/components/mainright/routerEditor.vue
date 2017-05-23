<template>
        <div class="route-editor" :class="{'hide': currentMethod!=tabIndex }">
            <div class="work-space" >
                <div class='work-main'>
                    <div class="editor-title">&nbsp;&gt;&nbsp;&nbsp;{{currentEditTitle}}</div>
                    <div class="editor">
                    </div>
                </div>
            </div>
            <div class="edit-title">
                <ul>
                    <li v-for = "(k , index) in item.grounds"
                        :class = "{'first':index===0 , 'active':currentEdit===index , 'cur':k.subs.length===0}"
                    >
                        <a @click = "changeTab(index)" href="javascript:;"><i></i>{{k.title}}</a>
                        <ol class="sub-items">
                            <li v-for="(sub, i) in k.subs" :class="{ 'cur' :i===currentSub[index] , 'edit-background' : i===currentSub[index]  }">
                                <a href="javascript:;" @click="changeSubTab(index , i , sub)"><i>&nbsp;</i>{{sub.title}}</a>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
   export default Vue.extend({
       props : ["item","tabIndex","currentMethod"],
       data (){
           return {
               currentEdit : 0,
               currentEditTitle : "",
               currentSub : function( tabs ){
                    var re = [];
                    for(var i = 0 ; i < tabs.grounds.length ; i++ ){
                        re[i] = 0 ;
                    }
                    return re;
               }( this.item)
           }
       },
       mounted (){
           var myTextarea = $(".work-main .editor");
           myTextarea.each(function(){
               var el = $(this)[0];
               console.log(el);
               CodeMirror(el, {
                    lineNumbers: true,
                    matchBrackets: true,
                    continueComments: "Enter",
                    extraKeys: {"Ctrl-Q": "toggleComment"},
                    theme: "ambiance"//主题  
               });
           });
       },
       methods : {
            changeSubTab( index , i , sub){
                this.$set( this.currentSub , index , i);
                this.currentEditTitle = this.item.grounds[this.currentEdit].title + "  >  " + sub.title;
            },
            changeTab( index ){
                this.$data.currentEdit = index;
            }
       }
   });
</script>