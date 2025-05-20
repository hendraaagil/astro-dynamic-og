import satori from 'satori'
import config from '../config'

export default async (title: string, image: string) =>
	satori(
		{
			type: 'div',
			props: {
				style: {
					display: 'flex',
					width: '100%',
					height: '100%',
					backgroundImage: `url(${image})`,
					backgroundSize: 'cover',
				},
				children: {
					type: 'div',
					props: {
						style: {
							width: '100%',
							height: '100%',
							padding: '36px 72px',
							backgroundImage:
								'linear-gradient(130deg, #0F172A 10%, rgba(15, 23, 42, 0.85) 50%, rgba(15, 23, 42, 0.65) 75%, rgba(15, 23, 42, 0.5) 150%)',
							color: '#F8FAFC',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						},
						children: [
							{
								type: 'h1',
								props: {
									style: { fontSize: '64px' },
									children: title,
								},
							},
							{
								type: 'div',
								props: {
									style: { display: 'flex' },
									children: [
										{
											type: 'img',
											props: {
												width: 64,
												height: 64,
												src: 'https://hendraaagil.dev/assets/main/logo-rounded.png',
												alt: 'Logo',
												style: { marginRight: '12px' },
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
																fontSize: '24px',
															},
															children: 'Hendra Agil',
														},
													},
													{
														type: 'p',
														props: {
															style: { margin: 0, fontSize: '16px' },
															children: 'Software Engineer',
														},
													},
												],
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
		config,
	)
