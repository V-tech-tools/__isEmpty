# 🌀 V_Tools :: **__isEmpty**
> **[.v.]** *Node Module* for Checking If variable is empty, null or NaN.

#
## ⏩ How To Install:
Add this repo git URL into dependencies in your projects package.json.  

	...
	"dependencies": {
		"v_is_empty":"https://github.com/V-tech-tools/__console.utility"  
	}, 
	...

## 💥 How to use:
Well just load it as a constant...and have fun... 

	const [isEmpty, isNotEmpty ] = require('v_is_empty');

	// Simple isEmpty check
	isEmpty();        //-> TRUE
	isEmpty('');      //-> TRUE

	var xV2 = NaN;;
	isEmpty(xV2);     //-> TRUE

	var X11;
	isEmpty(X11);     //-> TRUE
  
	X11 = 11;
	isEmpty(X11);     //-> FALSE

	// Simple isNotEmpty check
	isNotEmpty();     //-> FALSE
	isNotEmpty('');   //-> FALSE

	var yV2 = NaN;;
	isNotEmpty(yV2);  //-> FALSE

	var Y11;
	isNotEmpty(Y11);   //-> FALSE
  
	Y11 = 11;
	isNotEmpty(Y11);   //-> TRUE
  
	...



### 👻 Author: **-<[\_.⟁.\_]>-**   
### ⏰ CreatedTime: 05.09.2021 @ 18:51
