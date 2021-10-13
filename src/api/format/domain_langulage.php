<?php
	
	function DomainLangulage($val)
	{
		if(!empty($val)){
			return "vi";
		}else if($val == 'VN'){
			return "vi";
		}else if ($val == 'US') {
			return "en";
		}else if ($val == 'UK') {
			return "en";
		}else if ($val == 'ROK'){
			return "ko";
		}else if($val == 'JP'){
			return 'ja';
		}else if($val == 'CN'){
			return 'zh';
		}
	}
?>