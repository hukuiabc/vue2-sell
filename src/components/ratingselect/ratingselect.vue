<template>
    <div class="ratingselect">
        <div class="rating-type border-1px">
            <span @click="select(2, $event)" class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
            <span @click="select(0, $event)" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
            <span @click="select(1, $event)" class="block nagative" :class="{'active':selectType===1}">{{desc.nagative}}<span class="count">7</span></span>
        </div>
        <div @click="toggleContent" class="switch" :class="{'on':onlyContent}">
            <span class="icon-check_circle"></span>
            <span class="text">只看内容评价</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    const POSITIVE = 0;
    const NEGATIVE = 1;
    const ALL = 2;

    import bus from '@/components/common/js/eventBus';

    export default {
        props: {
            ratings: {
                type: Array,
                default() {
                    return [];
                }
            },
            selectType: {
                type: Number,
                default: ALL
            },
            onlyContent: {
                type: Boolean,
                default: false
            },
            desc: {
                type: Object,
                default() {
                    return {
                        all: '全部',
                        positive: '满意',
                        nagative: '不满意'
                    };
                }
            }
        },
        computed: {
            positives() {
                return this.ratings.filter((rating) => {
                    return rating.rateType === POSITIVE;
                });
            },
            nagatives() {
                return this.ratings.filter((rating) => {
                    return rating.rateType === NEGATIVE;
                });
            }
        },
        methods: {
            select(type, event) {
                if (!event._constructed) {
                    return;
                }
                this.selectType = type;
                bus.$emit('ratingtype.select', type);
            },
            toggleContent(event) {
                if (!event._constructed) {
                    return;
                }
                this.onlyContent = !this.onlyContent;
                bus.$emit('content.toggle', this.onlyContent);
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../common/stylus/mixin.styl";

    .ratingselect
        .rating-type
            padding: 18px 0
            margin: 0 18px
            border-1px(rgba(7, 17, 27, 0.1))
            font-size: 0px
            .block
                display: inline-block
                padding: 8px 12px
                line-height: 16px
                margin-right: 8px
                border-radius: 1px
                font-size: 12px
                color: rgb(77, 85, 93)
                &.active
                    color: #fff
                .count
                    margin-left: 2px
                    font-size: 8px
                &.positive
                    background: rgba(0, 160, 220, 0.2)
                    &.active
                        background: rgb(0, 160, 220)
                &.nagative
                    background: rgba(77, 85, 93, 0.2)
                    &.active
                        color: rgb(77, 85, 93)

        .switch
            padding: 12px 18px
            border-bottom: 1px solid rgba(7, 17, 27, 0.1)
            line-height: 24px
            color: rgb(147, 153, 159)
            font-size: 0
            &.on
                .icon-check_circle
                    color: #00c850
            margin-right: 4px
            .icon-check_circle
                display: inline-block
                vertical-align: top
                font-size: 24px
            .text
                font-size: 12px
                vertical-align: top
</style>
