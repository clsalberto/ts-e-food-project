import { Button } from '~/components/ui/button'

export default function Home() {
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Bem-vindo ao E-food!
            </h2>
            <p className="text-muted-foreground">
              Seu controle de pedidos e delivery.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button>Novo</Button>
          </div>
        </div>
      </div>
    </>
  )
}
