import Image from 'next/image';

export default function Logo() {
  return (
    <div className="bg-[#FAFAFA] pl-[300px] p-4">
      <div className="flex gap-8">
        <Image
          src="/images/hooli.png"
          alt="hoolie"
          width={100}
          height={50}
        />
        <Image
          src="/images/lyft.png"
          alt="lyft"
          width={100}
          height={50}
        />
        <Image
          src="/images/pen.png"
          alt="pen"
          width={100}
          height={50}
        />
        <Image
          src="/images/stripe.png"
          alt="stripe"
          width={100}
          height={50}
        />
        <Image
          src="/images/aws.png"
          alt="aws"
          width={100}
          height={50}
        />
        <Image
          src="/images/reddit.png"
          alt="reddit"
          width={100}
          height={50}
        />
      </div>
    </div>
  );
}