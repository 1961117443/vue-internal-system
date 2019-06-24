import {
    Toast,
    Indicator,
    MessageBox
  } from 'mint-ui';

export default {
    showLoading:function(){
        Indicator.open()
    },
    closeLoading:function(){
        Indicator.close()
    },
    showMessageOnTop:function(msg){ 
        return Toast({ message: msg,  position: "top",  duration: 800 });
    },
    yesNoBox:function(msg){
        return MessageBox.confirm(msg).catch(ex=>console.log(ex))
    }
}  