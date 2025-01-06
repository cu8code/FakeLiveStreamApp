import Link from "next/link";

type CardProps = {
	className?: string;
	children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className, children }) => {
	return (
		<div className={`rounded-lg shadow-md border border-gray-300 bg-white ${className}`}>
			{children}
		</div>
	);
};

type CardHeaderProps = {
	className?: string;
	children: React.ReactNode;
};

export const CardHeader: React.FC<CardHeaderProps> = ({ className, children }) => {
	return (
		<div className={`p-4 border-b border-gray-200 ${className}`}>
			{children}
		</div>
	);
};


type CardContentProps = {
	className?: string;
	children: React.ReactNode;
};

export const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
	return (
		<div className={`p-4 ${className}`}>
			{children}
		</div>
	);
};


export const WrapperGetStarted = (props: {children: React.ReactNode}) => {
    return (
        <Link href={"/dashboard"}>{props.children}</Link>
    )
}

export const WrapperCall = (props: {children: React.ReactNode}) => {
    return (
        <Link href={"/call"}>{props.children}</Link>
    )
}

const FlippedWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ transform: 'rotateY(180deg)' }}>
    {children}
  </div>
);

export default FlippedWrapper;