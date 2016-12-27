import Alert from 'react-s-alert'
/*ajax请求成功之后的弹窗操作*/
export default function(res){
	if(res.state===300){
		Alert.warning(res.info,{
			effect:"slide",
			timeout:2000
		})
	}else if(res.state===400){
		Alert.error(res.info,{
			effect:"slide",
			timeout:2000
		})
	}
}