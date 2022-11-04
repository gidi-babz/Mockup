import { TiEyeOutline } from 'react-icons/ti';

export default function Widgets({
	icon,
	title,
	amount,
	className,
	light,
	widgetIcon,
}) {
	return (
		<div className={className}>
			<span className={light ? 'eye-icon_light' : 'eye-icon'}>
				<TiEyeOutline />
			</span>
			<div className="widget-inner">
				<div style={{ display: 'flex', gap: '16px' }}>
					<div className={widgetIcon}>{icon}</div>
					<div className={light ? 'widget-stats_light' : 'widget-stats'}>
						<p className="widget-stats_head">{title}</p>
						<p className="widget-stats_numbers">
							<span className="symbol-naira">₦</span>
							<span className="widget-stats_numbers-amount">{amount}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
