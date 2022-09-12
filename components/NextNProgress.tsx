/**
 * Copyright (c) 2019 Apal Shah
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://github.com/apal21/nextjs-progressbar/blob/master/LICENSE
 */

import Router from 'next/router';
import NProgress from 'nprogress';
import { memo, useEffect } from 'react';

const routeChangeStart = () => {
	NProgress.set(0.3);
	NProgress.start();
};

const NextNProgress = () => {
	let timer: NodeJS.Timeout;

	const routeChangeEnd = () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			NProgress.done(true);
		}, 200);
	};

	useEffect(() => {
		Router.events.on('routeChangeStart', routeChangeStart);
		Router.events.on('routeChangeComplete', routeChangeEnd);
		Router.events.on('routeChangeError', routeChangeEnd);
		return () => {
			Router.events.off('routeChangeStart', routeChangeStart);
			Router.events.off('routeChangeComplete', routeChangeEnd);
			Router.events.off('routeChangeError', routeChangeEnd);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <></>;
};

export default memo(NextNProgress);
