import First from './components/FirstComponent'
import Second from './components/SecondComponent'
import NotFound from './components/NotFound'
import List from './components/Lists/List'
import DetailPage from './components/DetailPage'

export default [
{
	path:'/first',
	component: First,
},
{
	path:'/second',
	component:Second,
},
{
	path:'/users',
	component:List,
},
{
	path:'/view/:id',
	component:DetailPage,
},
{
	path:'*',
	component:NotFound,
}

];