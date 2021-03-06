import Link from 'next/link'
import './header.module.less'
import React, { useState } from 'react'

function Header() {
	const [flag, setFlag] = useState(false);

	return (
		<header className="global_header">
			<div className="global-header__wrapper">
				<div className="global-header__large-screen container position-relative d-lg-flex justify-content-between d-none w-100 h-100">
					<Link href='/'><a className="global-header__logo d-flex justify-content-center align-items-center">Logo</a></Link>
					<ul className="global-header__navigation d-flex">
						<li><Link href='/'><a>主页</a></Link></li>
						<li><Link href='/tanxiang'><a>精妙檀香</a></Link></li>
					</ul>
				</div>
				<div className={`global-header__small-screen container position-relative d-lg-none d-flex justify-content-center w-100 h-100 ${flag ? 'opened' : ''}`}>
					<div onClick={() => setFlag(!flag)} className="global-header__menu-toggle">
						<span></span>
						<span></span>
						<span></span>
						{/* <span className="btn btn-warning">按钮</span> */}
					</div>
					<Link href='/'><a className="global-header__logo d-flex justify-content-center align-items-center">ChengHui</a></Link>
					<div className="global-header__account d-flex justify-content-center align-items-center">M</div>
					<div className="global-header__small-screen-menu">
						<div className="global-header__menu-wrapper">
							<ul>
								<li><a href="/xmind2020/">1</a></li>
								<li><a href="/xmind8-pro/">2</a></li>
								<li><a href="/mobile/">3</a></li>
								<li><a href="/download/">4</a></li>
								<li><a href="/pricing/">5</a></li>
								<li><a href="/joinus/" title="前往加入我们"><span className="text">加入我们</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;