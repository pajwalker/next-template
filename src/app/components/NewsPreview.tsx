import Image from "next/image";

interface NewsPreviewProps {
    title: string;
    description: string;
    img: string;
}

export default function NewsPreview({ title, description, img }: NewsPreviewProps) {

    return (
        <div className="flex flex-col cursor-pointer group">
            <div className="overflow-hidden inline-block rounded-md w-full h-[200px]">
                <Image src={img} alt="News placeholder" className="w-full h-[200px] object-cover rounded-md group-hover:scale-[105%] duration-700" height={200} width={200} />
            </div>
            <h2 className="text-primary">{ title }</h2>
            <p className="text-xs">{ description }</p>
        </div>
    );
}