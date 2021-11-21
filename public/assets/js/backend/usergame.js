define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'usergame/index' + location.search,
                    add_url: 'usergame/add',
                    edit_url: 'usergame/edit',
                    del_url: 'usergame/del',
                    multi_url: 'usergame/multi',
                    import_url: 'usergame/import',
                    table: 'bsc_user_game',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'uid', title: __('Uid')},
                        {field: 'game_id', title: __('Game_id')},
                        {field: 'invest_num', title: __('Invest_num'), operate:'BETWEEN'},
                        {field: 'ticket_num', title: __('Ticket_num'), operate:'BETWEEN'},
                        {field: 'award_num', title: __('Award_num'), operate:'BETWEEN'},
                        {field: 'status', title: __('Status')},
                        {field: 'created', title: __('Created')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});