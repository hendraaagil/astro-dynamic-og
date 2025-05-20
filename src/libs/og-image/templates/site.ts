import satori from 'satori'
import config from '../config'

export default async (title?: string) =>
	satori(
		{
			type: 'div',
			props: {
				style: {
					display: 'flex',
					width: '100%',
					height: '100%',
					backgroundColor: '#0f172b',
				},
				children: {
					type: 'div',
					props: {
						style: {
							display: 'flex',
							width: '100%',
							height: '100%',
							padding: '36px 96px',
							backgroundImage:
								'linear-gradient(130deg, #3245ff 10%, rgba(188, 82, 238, 0.65) 50%, #ff4d32 150%)',
							color: '#F8FAFC',
							justifyContent: 'center',
							alignItems: 'center',
						},
						children: {
							type: 'div',
							props: {
								style: { display: 'flex' },
								children: [
									{
										type: 'img',
										props: {
											width: 134,
											height: 134,
											src: 'https://hendraaagil.dev/assets/main/logo-rounded.png',
											alt: 'Logo',
											style: { marginRight: '32px' },
										},
									},
									{
										type: 'div',
										props: {
											style: {
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'center',
											},
											children: [
												{
													type: 'h1',
													props: {
														style: {
															margin: 0,
															marginBottom: '6px',
															fontSize: '48px',
														},
														children: 'Hendra Agil',
													},
												},
												{
													type: 'p',
													props: {
														style: { margin: 0, fontSize: '24px' },
														children: title ?? 'Software Engineer',
													},
												},
											],
										},
									},
								],
							},
						},
					},
				},
			},
		},
		config,
	)
