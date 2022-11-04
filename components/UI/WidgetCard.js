import Image from 'next/image';

const WidgetCard = ({ children }) => {
	return (
		<div className="widget-card">
			<Image
				src="/bg-pattern.png"
				alt="background"
				fill
				style={{ zIndex: 1 }}
			/>
			{children}
		</div>
	);
};

export default WidgetCard;
