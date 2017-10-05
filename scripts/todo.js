// // 自分の答え

// // Description:
// //   TODO を管理することができるボットです
// // Commands:
// //   ボット名 todo     - TODO を作成
// //   ボット名 done     - TODO を完了にする
// //   ボット名 del      - TODO を消す
// //   ボット名 list     - TODO の一覧表示
// //   ボット名 donelist - 完了した TODO の一覧表示
// 'use strict';
// const todo = require('todo');
// module.exports = (robot) => {
// 	robot.respond(/todo (.+)/i, (msg) => {
// 		const task = msg.match[1].trim();
// 		todo.todo(task);
// 		msg.send('追加しました: ' + task);
// 	});
// 	robot.respond(/done (.+)/i, (msg) => {
// 		const task = msg.match[1].trim();
// 		todo.done(task);
// 		msg.send('完了にしました: ' + task);
// 	});
// 	robot.respond(/del (.+)/i, (msg) => {
// 		const task = msg.match[1].trim();
// 		todo.del(task);
// 		msg.send('削除しました: ' + task);
// 	});
// 	robot.respond(/list/i, (msg) => {
// 		if (todo.list() === " ") {
// 			msg.send('(TODOはありません)');
// 		} else {
// 			msg.send(todo.list().join('\n'));
// 		}
// 	});
// 	robot.respond(/donelist/i, (msg) => {
// 		if (todo.donelist() === " ") {
// 			msg.send('(完了したTODOはありません)');
// 		} else {
// 			msg.send(todo.donelist().join('\n'));
// 		}
// 	});
// };


// 解答

// Description:
//   TODO を管理することができるボットです
// Commands:
//   ボット名 todo     - TODO を作成
//   ボット名 done     - TODO を完了にする
//   ボット名 del      - TODO を消す
//   ボット名 list     - TODO の一覧表示
//   ボット名 donelist - 完了した TODO の一覧表示
'use strict';
const todo = require('todo');
module.exports = (robot) => {
	robot.respond(/todo (.+)/i, (msg) => {
		const task = msg.match[1].trim();
		todo.todo(task);
		msg.send('追加しました: ' + task);
	});
	robot.respond(/done (.+)/i, (msg) => {
		const task = msg.match[1].trim();
		todo.done(task);
		msg.send('完了にしました: ' + task);
	});
	robot.respond(/del (.+)/i, (msg) => {
		const task = msg.match[1].trim();
		todo.del(task);
		msg.send('削除しました: ' + task);
	});
	robot.respond(/list/i, (msg) => {
		// 何度も todo.list()という関数を呼び出さないのかの判断は
		// -> todo.list()の処理が非常に重い処理であるかによる
		const list = todo.list();
		if (list.length === 0) {
			msg.send('(TODOはありません)');
		} else {
			msg.send(todo.list().join('\n'));
		}
	});
	robot.respond(/donelist/i, (msg) => {
		// 何度も todo.donelist()という関数を呼び出さないのかの判断は
		// -> todo.donelist()の処理が非常に重い処理であるかによる
		const donalist = todo.donalist();
		if (donelist.length === 0) {
			msg.send('(完了したTODOはありません)');
		} else {
			msg.send(todo.donelist().join('\n'));
		}
	});
};