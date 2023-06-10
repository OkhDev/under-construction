import { GithubIcon, DribbbleIcon } from "@/components/icons"
import { subtitle, title } from "@/components/primitives"
import { siteConfig } from "@/config/site"
import { Link } from "@nextui-org/link"
import { button as buttonStyles } from "@nextui-org/theme"
import NextLink from "next/link"
import { ThemeSwitch } from "@/components/theme-switch"
import { Button } from "@nextui-org/button"

export default function Home() {
	return (
		<section className='fixed inset-0 flex flex-col items-center justify-center h-full gap-4'>
			<Button
				className={buttonStyles({
					variant: "flat",
					radius: "full",
					isIconOnly: true,
					class: "absolute top-[5%] right-[5%]",
				})}
			>
				<ThemeSwitch />
			</Button>
			<div className='justify-center inline-block max-w-lg text-center'>
				<p className='mb-4 text-4xl'>&#128679;</p>
				<h1 className={title()}>Under&nbsp;</h1>
				<h1 className={title({ color: "yellow" })}>Construction&nbsp;</h1>
				<h4 className={subtitle({ class: "mt-4" })}>Check out my socials!</h4>
			</div>

			<div className='flex gap-3'>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({
						color: "secondary",
						variant: "shadow",
						radius: "full",
					})}
					href={siteConfig.links.dribbble}
				>
					<DribbbleIcon size={18} />
					Dribbble
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({
						color: "primary",
						variant: "shadow",
						radius: "full",
					})}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					Github
				</Link>
			</div>
		</section>
	)
}
