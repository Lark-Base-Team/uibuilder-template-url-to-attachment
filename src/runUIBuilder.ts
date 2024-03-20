//@ts-nocheck
import { bitable, FieldType } from "@base-open/web-api";

export default async function main(uiBuilder) {
    uiBuilder.form(form => ({
        formItems: [
            form.tableSelect('tableId', { label: '选择数据表' }),
            form.fieldSelect('urlFieldId', { label: '要转换的 URL 字段', sourceTable: 'tableId', filterByTypes: [FieldType.Url] }),
            form.fieldSelect('attachmentFieldId', { label: '转换到的附件字段', sourceTable: 'tableId', filterByTypes: [FieldType.Attachment] }),
        ],
        buttons: ['批量转换'],
    }), async ({ values }) => {
        const { tableId, urlFieldId, attachmentFieldId } = values;
        // 省略转换逻辑
    });
}