<template>
   <div class="topHeader">
       <div class="logo" float-left></div>
       <div class="title" float-left>日志中心</div>
       <div class="nav-list">
          <ul>
              <li v-for="item in menus" :key="item.id" :class="{active: item.id==currentTab}" @click="expandMenu(item)">
                <img :src="`./static/imgs/${item.icon}`">
                <div class="list-name">{{item.value}}</div>  
              </li>
          </ul>
       </div>
   </div>
</template>

<script>


export default{
    name: 'topHeader',
    data() {
      return{
        currentTab: 1
      }
    },
    props: {
        menus: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    methods: {
        expandMenu(item) {
            if (!item.route) {
                this.$message.warning("暂无数据！");
                return;
            }
            this.currentTab = item.id
            item.route && this.$router.push(item.route);            
        }
    }
}
</script>

<style lang="less" scoped>

.topHeader{
    height:100px;
    width:100;
    background: url("../../public/static/imgs/top_bg1.png") #0086f1 right center
    no-repeat;
    .logo{
       height: 100px;
       width: 80px;
       margin-left:10px;
       background: url("../../public/static/imgs/logo.png") left center
            no-repeat;
    }
    .title{
       height: 100px;
       line-height:100px;
       font-size:40px;
       color:#fff; 
       cursor: pointer;
    }
    .nav-list{
        float:right;
        height:100px;
        margin-right:100px;
        ul{
            height:100px;
            li{
                position:relative;
                float:left;
                width:100px;
                height:100px;
                padding-bottom: 14px;
                margin-right:21px;
                cursor: pointer;
                img{
                  display: block;
                  height:32px;
                  width:32px;
                  margin: 15px auto 10px;
                }
                .list-name{
                  height:20px;
                  line-height:20px;
                  font-size:20px;
                  color:#fff;
                  text-align:center;
                }
                &.active:after{
                    content: '';
                    position: absolute;
                    bottom:14px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: block;
                    width:20px;
                    height:14px;
                    background-image: url(../../public/static/imgs/current.png);
                }
            }
        }
    }
}

</style>
