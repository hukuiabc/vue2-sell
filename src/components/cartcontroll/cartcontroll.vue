<template>
    <div class="cartcontroll">
        <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click.stop.prevent="decreaseCart"></div>
        <div class="cart-count" v-show="food.count > 0">{{foodCount}}</div>
        <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'Vue';
    import bus from '@/components/common/js/eventBus';

    export default {
        props: {
            food: {
                type: Object
            }
        },
        data() {
            return {
                foodCount: null
            };
        },
        created() {
//            console.log(this.food);
        },
        methods: {
            addCart(event) {
                if (!event._constructed) {
                    return;
                }

                if (!this.food.count) {
                    Vue.set(this.food, 'count', 1);
                    this.foodCount = this.food.count;
                } else {
                    this.food.count++;
                    this.foodCount = this.food.count;
                }

                bus.$emit('sendFoodCountEventBus', this.food);
            },
            decreaseCart(event) {
                if (!event._constructed) {
                    return;
                }
                console.log('decreaseCart click');
                if (this.food.count) {
                    this.food.count--;
                    this.foodCount = this.food.count;
                }
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .cartcontroll
        font-size: 0
        .cart-decrease, .cart-add
            padding: 6px
            display: inline-block
            line-height: 24px
            font-size: 24px
            color: rgb(0, 160, 220)
            &.icon-remove_circle_outline
                color: rgb(0, 160, 220)
        .cart-count
            display: inline-block
            vertical-align: top
            width: 12px
            padding-top: 6px
            line-height: 24px
            text-align: center
            font-size: 10px
            color: rgb(7, 17, 27)
        .cart-add
            display: inline-block

</style>
