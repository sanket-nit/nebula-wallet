import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Globe, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
          }}
          className="text-5xl font-bold mb-4">Welcome to Nebula Wallet</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20, }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.5,
          }}
          className="text-xl mb-8">Your gateway to the crypto universe</motion.p>
        <Link to={'/create-wallet'}>
          <Button className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8">Get Started</Button>
        </Link>
      </section>
      <section id="features" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 backdrop-blur-md border-gray-700">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Secure Storage</h3>
                <p className="text-white text-opacity-55">Keep your crypto assets safe with our state-of-the-art security measures.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 backdrop-blur-md border-gray-700">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2  text-white">Fast Transactions</h3>
                <p className="text-white text-opacity-55">Experience lightning-fast transactions across multiple blockchains.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 backdrop-blur-md border-gray-700">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">Global Access</h3>
                <p className="text-white text-opacity-55">Access your wallet from anywhere in the world, anytime.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* about section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Nebula Wallet</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Nebula Wallet is a cutting-edge cryptocurrency wallet designed for both beginners and experienced users.
            Our mission is to make managing your digital assets as easy and secure as possible,
            while providing you with powerful tools to navigate the crypto universe.
          </p>
        </div>
      </section>
    </main>
  )
}