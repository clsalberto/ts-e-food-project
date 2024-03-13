'use client'

import { Beef, ListTree, LucideProps, Menu, Package, ShoppingCart, Store, Truck, Users, Utensils } from "lucide-react"
import { useRouter } from "next/navigation"
import { ComponentType } from "react"
import { Button } from "~/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "~/components/ui/sheet"
import { Command, CommandGroup, CommandItem, CommandList } from "../ui/command"
import { Logo } from "./logo"

interface Item {
  title: string
  icon: ComponentType<LucideProps>
  route: string
}

interface Group{
  group: string
  itens: Item[]
}

export function Sidebar() {
  const menu = [
    {
      group: "Loja",
      itens: [
        {
          title: "Dashboard",
          icon: Store,
          route: "/"
        }
      ]
    },
    {
    group: "Cadastros",
    itens: [
      {
        title: "Categorias",
        icon: ListTree,
        route: "/"
      },
      {
        title: "Produtos",
        icon: Package,
        route: "/"
      },
      {
        title: "Cardápio",
        icon: Utensils,
        route: "/"
      }
    ]
  },
  {
    group: "Ordens",
    itens: [
      {
        title: "Pedidos",
        icon: ShoppingCart,
        route: "/"
      },
      {
        title: "Cozinha",
        icon: Beef,
        route: "/"
      },
      {
        title: "Entregas",
        icon: Truck,
        route: "/"
      }
    ]
  },
  {
    group: "Configurações",
    itens: [
      {
        title: "Perfil",
        icon: Store,
        route: "/"
      },
      {
        title: "Usuários",
        icon: Users,
        route: "/"
      }
    ]
  }] satisfies Group[]

  const router = useRouter()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent close={false} side="left" className="w-64">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>


        <Command>

      <CommandList className="max-h-screen">

        {menu.map(({group, itens},groupKey) => (
          <CommandGroup key={groupKey} heading={group}>
          {itens.map(({title,route,icon: Icon}, itemKey)=>(

            <CommandItem key={itemKey} value={title} onSelect={() => router.push(route)}>

            <Icon className="mr-2 h-4 w-4" />
            <span>{title}</span>

          </CommandItem>
          ))}

        </CommandGroup>
        ))}
      </CommandList>
    </Command>


      </SheetContent>
    </Sheet>
  )
}
