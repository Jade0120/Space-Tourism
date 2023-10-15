<style lang="scss" scoped>
	.n{
		&,*{
			margin: 0;
			padding: 0;
			border: 0;
			box-sizing: border-box;
			color: inherit;
			font-size: inherit;
			line-height: inherit;
			font-weight: inherit;
			font-style: normal;
		 }
		 
		 ul,
		 ol,
		 li,
		 dl,
		 dd,
		 dt {
		 	list-style: none;
		 	list-style-type: none
		 }
		 
		 
		 input,
		 textarea {
		 	appearance: none;
			border: 0;
		 	background: none;
		 }
		 textarea{
		 	font-family: inherit;
		 	resize: none;
		 	background: none;
		 }
		 
		 input[type='button'],button {
		 	cursor: pointer;
		 	user-select: none;
		 	background: none;
		 }
		 
		 input[type='text'], input[type='password'] {
		 	width: 100%;
		 }
		 
		 a,
		 i,
		 a:hover {
		 	text-decoration: none;
		 	cursor: pointer;
		 }
		 
		 table {
		 	border-collapse: collapse;
		 }
		 
		 img,
		 label {
		 	cursor: pointer;
		 }
		 input{
			 outline: none;
		 }
	}
	 
		
	 @mixin n-row1{
	 	display: flex;
	 	align-items: center;
	 }
	 @mixin n-row2{
	 	display: flex;
	 	justify-content: center;
	 	align-items: center;
	 }
	 @mixin n-row3{
	 	display: flex;
	 	justify-content: flex-end;
	 	align-items: center;
	 }
	 @mixin n-row4{
	 	display: flex;
	 	justify-content: space-around;
	 	align-items: center;
	 }
	 @mixin n-row5{
	 	display: flex;
	 	justify-content: space-between;
	 	align-items: center;
	 }
	 
	 @mixin n-col1{
	 	display: flex;
	 	flex-direction: column;
	 }
	 @mixin n-col2{
	 	display: flex;
	 	justify-content: center;
	 	flex-direction: column;
	 }
	 @mixin n-col3{
	 	display: flex;
	 	justify-content: flex-end;
	 	flex-direction: column;
	 }
	 @mixin n-col4{
	 	display: flex;
	 	justify-content: space-around;
	 	flex-direction: column;
	 }
	 @mixin n-col5{
	 	display: flex;
	 	justify-content: space-between;
	 	flex-direction: column;
	 }
	 
	
	@font-face{
		font-family: barlowcondensed;               
		src: url(@/assets/font/BarlowCondensed-Regular.ttf);         
	}
	@font-face{
		font-family: Bellefair;               
		src: url(@/assets/font/Bellefair-Regular.ttf);         
	}
	@font-face{
		font-family: Barlow;               
		src: url(@/assets/font/Barlow-Regular.ttf);         
	} 
	.phome:not([__null__]){
		width: 100%;
		font-family: barlowcondensed;
    position: relative;
		height: 100vh;
		overflow: auto;
		@include n-col1;
    background-image: url("@/assets/img/5.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #464646;
		padding: 30px;
		align-items: stretch;
		&::-webkit-scrollbar {
			background: rgba(0,0,0,0);
			width: 6px;
			height: 6px;
		}
		
		&::-webkit-scrollbar-thumb {
			background: rgba(255,255,255,0.3);
			border-radius: 3px;
			&:hover{
				background: rgba(255,255,255,0.7);
			} 
		}
		
		&::-webkit-scrollbar-button {
			display: none;
		}
		
		.phome-main{
			height: 0;
			flex: 1;
			@include n-row1;
			width: 90%;
			max-width: 1200px;
			margin: 0 auto;
			margin-top: 130px;
			gap: 10%;
		}
		.phome-left{
			width: 0;
			@include n-row2;
			flex: 0 0 50%;
			position: relative;
			height: 100%;
			overflow: hidden;
			>h3{
				letter-spacing: 5px;
				font-size: 27px;
        white-space: nowrap;
				gap:27px;
				@include n-row1;
				position: absolute;
				left: 0;
				top: 0;
				color: #fff;
				text-transform:uppercase;
				>i{
					color: #4f5159;
				}
			}
			>img{
				transition: opacity 1s; 
				max-width: 90%;
				position: absolute;
				left: -200vw;
				max-height: 90%;
				opacity: 0;
			}
			.phome-inout{
				position: static;
				opacity: 1;
				z-index: 2;
			}
		}
		.phome-right{
			flex: 1;
			height: 100%;
			padding-top: 100px;
			width: 0;
			>h1{
				font-size: 100px;
				color: #fff;
				line-height: 1;
				font-family: Bellefair;
				margin-top: 50px;
			}
			>article{
				font-family: Barlow;
				margin-top: 40px;
				letter-spacing: 0.5px;
				font-size: 18px;
				line-height: 1.7;
				color: rgba(208, 214, 249, 1);
			}
			>footer{
				margin-top: 50px;
				padding-top: 26px;
				border-top: 1px solid rgba(56, 59, 75, 1);
				@include n-row1;
				align-items: flex-start;
				gap: 75px;
				>div{
					
					
					>p{
						line-height: 1;
						font-size: 14px;
						color: rgba(208, 214, 249, 1);
					}
					>h3{
						font-family: Bellefair;
						text-transform: uppercase;
						color: #fff;
						font-size: 28px;
						line-height: 1;
						margin-top: 14px;
            text-align: center;
					}
				}
			}
		}
		.phome-tabs{
			font-size: 16px;
			color: rgba(208, 214, 249, 1);
			@include n-row1;
			align-items: stretch;
			height: 34px;
			
			letter-spacing: 2px;
			gap:30px;
			font-family: barlowcondensed;
			>li{
				@include n-row2;
				cursor: pointer;
				align-items: flex-start;
				&.phome-tabs-cur{
					border-bottom: 2px solid #fff;
					color: #fff;
				}
			}
		}
		
		
	}
	

	
	@media screen and (max-width: 990px) {
		.phome:not([__null__]){
			display: block;
			padding: 0;
			overflow-y: auto;
			padding-bottom: 50px;
			&::-webkit-scrollbar {
				width: 0;
				height: 0;
			}
			.phome-nav{
				>img{
					width: 24px;
					height: 24px;
				}
				>i{
					margin: 0 5px;
				}
				>ul{
					height: 50px;
					gap:10px;
					>li{
						font-size: 12px;
						gap:5px;
						>em{
							display: none;
						}
					}
					.phome-nav-cur{
						border-bottom: 2px solid #fff;
						padding-top: 2px;
					}
				}
			}
			.phome-main{
				display: block;
				height: auto;
				margin-top: 150px;
			}
			.phome-left{
				width: 100%;
				height: auto;
				padding: 100px 0;
				>h3{
					font-size: 17px;
					gap:17px;
				}
				>img{
					max-width: 70%;
				}
			}
			.phome-right{
				height: auto;
				padding-top: 0px;
				width: 100%;
				>h1{
					font-size: 50px;
					margin-top: 40px;
					text-align: center;
				}
				>article{
					text-align: center;
					font-size: 15px;
				}
				>footer{
					gap: 20px;
					>div{
						flex: 1; 
						width: 0;
						text-align: center;
						
						>p{
							font-size: 13px;
						}
						>h3{
							font-size: 22px;
						}
					}
				}
			}
			.phome-tabs{
				justify-content: center;
			}
			
			
		}
	}
  @media screen and (max-width: 376px) {
    #phome-main{
				margin-top: 100px;
			}
  }
	
</style>

<template>
	<div class="n phome">
		<Nav chosen="2"></Nav>
		<div class="phome-main" id="phome-main">
			<aside class="phome-left">
				<h3 class="subtitle"><i>01</i>Pick your destination</h3>
				<img :class="{'phome-inout': tabsConf.cur === item }" v-for="item in tabsConf.list" :src="item.img" />
			</aside>
			
			<article class="phome-right">
				<ul class="phome-tabs">
					<li :class="{'phome-tabs-cur': tabsConf.cur === item}" @click="tabsConf.cur = item" v-for="item,idx in tabsConf.list" :key="idx">{{item.label}}</li>
					
				</ul>
				
				<h1>{{tabsConf.cur.label}}</h1>
				<article>{{tabsConf.cur.des}}</article>
				
				<footer>
					<div>
						<p>AVG. DISTANCE</p>
						<h3>{{tabsConf.cur.avg}}</h3>
					</div>
					<div>
						<p>Est. travel time</p>
						<h3>{{tabsConf.cur.time}}</h3>
					</div>
				</footer>
			</article>
		</div>
		
	</div>
</template>

<script setup>
	import {reactive} from 'vue';
	import Nav from "@/components/Nav.vue"
	import img1 from '@/assets/img/1.png';
	import img2 from '@/assets/img/2.png';
	import img3 from '@/assets/img/3.png';
	import img4 from '@/assets/img/4.png';
	
	
	const tabsConf = reactive({
		cur:null,
		list:[
			{label:"MOON",  des: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.', avg: '384,400 km',  time: '3 days', img: img1 },
			{label:"MARS",  des: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!', avg: '225 MIL. km',  time: '9 months' , img:img2 },
			{label:"EUROPA",  des: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.', avg: '628 MIL. km',  time: '3 years' , img:img3 },
			{label:"TITAN",  des: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.', avg: '1.6 BIL. km',  time: '7 years' , img:img4 },
		]
	})
	tabsConf.cur = tabsConf.list[0]
</script>
