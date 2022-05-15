let data = [{
	name: 'Nick',
	age: '30'
},
{
	name: 'Brenda',
	age: '25'
},
{
	name: 'Tasha',
	age: '26'
},
{
	name: 'Marion',
	age: '24'
},
{
	name: 'Brill',
	age: '21'
},
{
	name: 'Mich',
	age: '22'
}
]

const info=document.querySelector('#info');
let details = data.map(function(item) {
	return '<div>' + item.name + " " +item.age +'</div>';
});

info.innerHTML = details.join('\n');