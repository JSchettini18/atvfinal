"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Gauge, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function BlockPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-transparent px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-400">Services</a>
            <a href="#" className="text-white hover:text-blue-400">Homage</a>
            <a href="#" className="text-white hover:text-blue-400">About</a>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Register
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Highway with trucks at sunset"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        </div>

        <div className="relative container mx-auto text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            CONECTANDO O BRASIL
            <br />
            COM SEGURANÇA E AGILIDADE
          </motion.h1>
          
          <p className="text-xl mb-8 text-gray-300">
            Conectando o Brasil com segurança e agilidade
            <br />
            Cobertura nacional, performance e rastreio exepcional.
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            <div className="relative">
              <Gauge className="w-24 h-24 text-yellow-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">95</span>
              </div>
            </div>
            <div className="relative">
              <Gauge className="w-24 h-24 text-blue-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">97</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" size="lg" className="text-black   border-white hover:bg-white hover:text-black">
            Saiba Mais sobre Nossos Serviços
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Solicite um Orçamento
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              "TRANSPORTE RÁPIDO",
              "TRANSPORT SEGURO",
              "TRASPORTE ECONÔMICO",
              "LOGISTÍCA E DISTRIBUIÇÃO",
              "RASTREIO EM TEMPO REAL"
            ].map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Truck className="w-12 h-12 mx-auto mb-2 text-white" />
                <p className="text-sm font-medium">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">SERVICES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px]">
              <img
                src="/photos/MAPA-BRASIL-GENERAL.png"
                alt="Brazil map"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-blue-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                "NATION TRUCKTLAPORT",
                "PAKTIONAL LOIDAP",
                "RALDEKIT TRACKING",
                "RATONAT TRACKING"
              ].map((service, index) => (
                <Card key={service}>
                  <CardContent className="flex items-center p-6">
                    <Truck className="w-12 h-12 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{service}</h3>
                      <p className="text-gray-600">
                        Professional transportation services with nationwide coverage
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}