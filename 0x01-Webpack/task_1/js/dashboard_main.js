import $ from 'jquery';
import _ from 'lodash';

$("<p>Holberton Dashboard</p>").appendTo($('body'));
$("<p>Dashboard data for the students</p>").appendTo($('body'));
$("<button>Click here to get started</button>").appendTo($('body'));
$("<p id='count'></p>").appendTo($('body'));
$("<p>Copyright - Holberton School</p>").appendTo($('body'));

let i = 0;
function updateCounter() {
	i += 1;
  $("#count").text(`${i} clicks on the button`);
	return i;
}
$('button').on('click', _.debounce(() => {
		let i = updateCounter();
	}));
