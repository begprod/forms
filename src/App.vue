<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style lang="stylus">
	body
		margin 0
		box-sizing border-box
		font-family Arial, sans-serif
		//background linear-gradient(deeppink, rebeccapurple)

	*
	*:before
	*:after
		box-sizing inherit

	.wrapper
		display flex
		flex-direction column
		justify-content center
		max-width 700px
		margin 0 auto
		padding 30px
		min-height 100vh

	.form
		background-color white
		&__fieldset
			position relative
			margin 0 0 30px 0
			padding 0
			background-color white
			border none
		&__label
			position absolute
			top 17px
			left 20px
			display block
			font-size 14px
			color #999
			user-select none
			cursor text
			transition all .2s ease-in-out
		&__input
			width 100%
			height 50px
			margin 0
			padding 20px 50px 0 20px
			font-size 14px
			border 1px solid #999
			border-radius 3px
			&.is-active
			&:focus
				outline none
				border 1px solid #666
				~ .form__label
					font-size 11px
					transform translateY(-7px)
			&.is-required
				~ .form__label
					&::after
						content "*"
						position absolute
						top 0
						right -9px
						color red
			&.is-error
				border-color red
		&__error
			position absolute
			top calc(100% + 3px)
			left 0
			font-size 12px
			color #f00
		&__button
			width 100%
			padding: 20px 30px 20px 30px
			font-size 14px
			font-weight bold
			color white
			border none
			border-radius 3px
			background-color #c00
			cursor pointer
			&:disabled
				opacity .3
				cursor default
				background-color #666
		&__link
			display inline-block
			margin-top 10px
			font-size 12px
		&__footer
			margin-top 30px
			text-align center
		&__message
			margin-bottom 30px
			padding 15px
			font-size 14px
			font-weight bold
			line-height 1.5
			border-radius 3px
			background-color #e4e4e4

	@media screen and (max-width: 480px)
		.form__fieldset
			margin-bottom 35px
		.form__error
			font-size 11px
</style>
