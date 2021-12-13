define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'bsccredit/index' + location.search,
                    add_url: 'bsccredit/add',
                    edit_url: 'bsccredit/edit',
                    del_url: 'bsccredit/del',
                    multi_url: 'bsccredit/multi',
                    import_url: 'bsccredit/import',
                    table: 'bsc_credit',
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
                        {field: 'type', title: __('Type')},
                        {field: 'file_name', title: __('File_name')},
                        {field: 'num', title: __('Num'), operate:'BETWEEN'},
                        // {field: 'remark', title: __('Remark'), operate: 'LIKE'},
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