import Addblog  from "./components/Addblog"
import showblogs  from "./components/showblogs"
import newblog  from "./components/newblog"
export default[
	{path:"/show",component:showblogs},
	{path:"/add",component:Addblog},
	{path:"/blog/:id",component:newblog},
	]

