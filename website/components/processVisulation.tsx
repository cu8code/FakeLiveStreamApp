export const ProcessingVisualization = () => {
	return (
		<div className="w-full lg:w-1/2 flex justify-center items-center">
			<iframe
				width="100%"
				height="315"
				src={process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_URL!}
				title="YouTube video"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				className="rounded-lg"
			></iframe>
		</div>
	);
};

