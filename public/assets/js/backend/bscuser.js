define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'bscuser/index' + location.search,
                    add_url: 'bscuser/add',
                    edit_url: 'bscuser/edit',
                    del_url: 'bscuser/del',
                    multi_url: 'bscuser/multi',
                    import_url: 'bscuser/import',
                    table: 'bsc_user',
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
                        {field: 'address', title: __('Address'), operate: 'LIKE'},
                        {field: 'ref_id', title: __('Ref_id')},
                        {field: 'ref_num', title: __('Ref_num')},
                        {field: 'team_num', title: __('Team_num')},
                        {field: 'ticket_num', title: __('Ticket_num'), operate:'BETWEEN'},
                        {field: 'invest_num', title: __('Invest_num'), operate:'BETWEEN'},
                        {field: 'credit', title: __('投资奖励'), operate:'BETWEEN'},
                        {field: 'pool_credit', title: __('基金奖励'), operate:'BETWEEN'},
                        {field: 'ref_credit', title: __('推荐奖励'), operate:'BETWEEN'},
                        {field: 'total_credit', title: __('Total_credit'), operate:'BETWEEN'},
                        // {field: 'updated', title: __('Updated')},
                        {field: 'created', title: __('Created'), formatter: Table.api.formatter.datetime, operate: 'RANGE', addclass: 'datetimerange', sortable: true},
                        // {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
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