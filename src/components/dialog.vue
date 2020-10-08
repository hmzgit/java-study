<template>
    <div>
        <div class="mask"></div>
        <div class="modal">
            <div class="modal-content block-confirm">
                <div class="title">确定要消耗5学习币下载吗?</div>
                <div class="buttons flex-align-center clearfix">
                    <div class="confirm">确定</div>
                    <div class="cancel">取消</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {};
    },
    computed: {},
    methods: {}
};
</script>

<style scoped lang="scss">
.mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    background: #000;
    z-index: 2001;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    z-index: 2005;

    .modal-content {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        text-align: left;
        background: #fff;
        box-shadow: 0 2px 11px 0 rgba(0, 0, 0, 0.21);
        border-radius: 4px;
        animation: onShow 0.3s ease-in-out;
    }

    .block-confirm {
        width: 300px;
        padding: 15px 0;
        text-align: center;
        color: #333;

        .title {
            font-size: 14px;
            padding: 30px 0;
        }

        .buttons {
            padding: 10px;

            .confirm,
            .cancel {
                display: inline-block;
                padding: 0 20px;
                height: 32px;
                line-height: 32px;
                color: #fff;
                text-align: center;
                cursor: pointer;
                font-size: 12px;
                border-radius: 40px;
            }

            .confirm {
                border: 1px solid rgb(74, 144, 226);
                background-color: rgb(74, 144, 226);
                margin-right: 20px;

                &:hover {
                    opacity: 0.9;
                }
            }

            .cancel {
                border: 1px solid #dcdfe6;
                color: #606266;

                &:hover {
                    color: rgb(74, 144, 226);
                    border-color: #c6e2ff;
                    background-color: #ecf5ff;
                }
            }
        }
    }

    &::after {
        content: '';
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
    }
}

// @media screen and (max-height: 1200px) {
//     .modal {
//         overflow-y: scroll;
//     }
// }
</style>
