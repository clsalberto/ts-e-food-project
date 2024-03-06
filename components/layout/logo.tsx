import Link from "next/link";

export function Logo(){
  return (
    <Link href="/">
      <h2 className="text-primary text-3xl font-bold">e<span className="text-secondary-foreground/55">food</span></h2>
    </Link>
  )
}
