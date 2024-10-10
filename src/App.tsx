import "./App.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  Zap,
  Shield,
  Users,
  Leaf,
  CarFront,
  Earth,
  BatteryFull,
  CircleDollarSign,
  ClockAlert,
  UsersRound,
  Swords,
  Flame,
  BadgeDollarSign,
} from "lucide-react";
import FerrariLogo from "./components/FerrariLogo";

function App() {
  return (
    <div className="bg-[#F2F2F2] min-h-screen overflow-clip">
      <header className="sticky top-0 bg-[#FF2800] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <FerrariLogo />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Models
            </a>
            <a href="#" className="hover:underline">
              Innovation
            </a>
            <a href="#" className="hover:underline">
              Heritage
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-[#FF2800]"
          >
            Configure Your Ferrari
          </Button>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="flex justify-center flex-col mx-8 lg:mx-0 lg:block mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Tugas PKK Analisis SWOT: Ferrari
          </h1>
          <p className="text-xl mb-6">11 RPL 1 (Ahmad Danial, Zahran Zaidan)</p>
          <Button className=" bg-[#FF2800] hover:bg-[#CC2000]">
            Explore Our Legacy <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <Tabs defaultValue="strengths" className="mb-12">
          <TabsList className="pb-36 scale-125 grid w-full grid-cols-1 md:scale-100 md:pb-0 md:grid-cols-4">
            <TabsTrigger value="strengths">Strengths</TabsTrigger>
            <TabsTrigger value="weaknesses">Weaknesses</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="threats">Threats</TabsTrigger>
          </TabsList>
          <TabsContent value="strengths">
            <Card>
              <CardHeader>
                <CardTitle>Strengths (Kekukatan)</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Shield className="h-16 w-16 md:h-6 md:w-6 text-[#FF2800]" />
                  <div>
                    <h3 className="font-semibold">
                      Merek Premium dan Reputasi
                    </h3>
                    <p>
                      Ferrari dikenal sebagai merek mobil mewah yang sangat
                      prestisius dan memiliki sejarah panjang di industri
                      otomotif.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Zap className="h-16 w-16 md:h-6 md:w-6 text-[#FF2800]" />
                  <div>
                    <h3 className="font-semibold">Inovasi Teknologi Tinggi</h3>
                    <p>
                      Mobil Ferrari terkenal dengan performa tinggi dan
                      teknologi canggih dalam desain mesin, aerodinamika, dan
                      material ringan.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-16 w-16 md:h-6 md:w-6 text-[#FF2800]" />
                  <div>
                    <h3 className="font-semibold">Basis Pelanggan Loyal</h3>
                    <p>
                      Ferrari memiliki basis pelanggan yang sangat setia,
                      terutama di kalangan penggemar otomotif dan kolektor.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <CarFront className="h-16 w-16 md:h-6 md:w-6 text-[#FF2800]" />
                  <div>
                    <h3 className="font-semibold">Desain Ikonik</h3>
                    <p>
                      Ferrari memiliki desain mobil yang unik dan berkarakter,
                      yang sangat diminati oleh pelanggan kelas atas.{" "}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="weaknesses">
            <Card>
              <CardHeader>
                <CardTitle>Weakness (Kelemahan)</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <CircleDollarSign className="h-16 w-16 md:h-6 md:w-6 text-fuchsia-500" />
                  <div>
                    <h3 className="font-semibold">Harga yang Sangat Tinggi</h3>
                    <p>
                      Produk Ferrari hanya dapat dijangkau oleh sebagian kecil
                      populasi karena harganya yang sangat mahal.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <ClockAlert className="h-16 w-16 md:h-6 md:w-6 text-fuchsia-500" />
                  <div>
                    <h3 className="font-semibold">Keterbatasan Produksi</h3>
                    <p>
                      Ferrari secara sadar membatasi produksi untuk menjaga
                      eksklusivitas, tetapi ini juga dapat membatasi pertumbuhan
                      pasar mereka.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <UsersRound className="h-16 w-16 md:h-6 md:w-6 text-fuchsia-500" />
                  <div>
                    <h3 className="font-semibold">
                      Ketergantungan pada Pasar Niche
                    </h3>
                    <p>
                      Ferrari sangat bergantung pada pasar mobil mewah yang
                      sempit, sehingga sensitif terhadap fluktuasi ekonomi
                      global yang mempengaruhi daya beli konsumen kelas atas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="opportunities">
            <Card>
              <CardHeader>
                <CardTitle>Opportunities (Peluang)</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Earth className="h-16 w-16 md:h-6 md:w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Perluasan ke Pasar Baru</h3>
                    <p>
                      Pertumbuhan ekonomi di negara berkembang dapat membuka
                      pasar baru bagi Ferrari, khususnya di kawasan Asia dan
                      Timur Tengah.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Leaf className="h-16 w-16 md:h-6 md:w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Diversifikasi Produk</h3>
                    <p>
                      Ferrari dapat mempertimbangkan diversifikasi produk
                      seperti kendaraan listrik atau model hybrid untuk
                      mengikuti tren keberlanjutan dan teknologi hijau.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <BatteryFull className="h-16 w-16 md:h-6 md:w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Teknologi Listrik</h3>
                    <p>
                      Ada peluang besar dalam teknologi kendaraan listrik yang
                      semakin berkembang dan permintaan untuk mobil ramah
                      lingkungan.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="threats">
            <Card>
              <CardHeader>
                <CardTitle>Weakness (Kelemahan)</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Swords className="h-16 w-16 md:h-6 md:w-6 text-yellow-500" />
                  <div>
                    <h3 className="font-semibold">Persaingan yang Ketat</h3>
                    <p>
                      Ferrari menghadapi persaingan ketat dari merek-merek mobil
                      mewah lainnya seperti Lamborghini, McLaren, dan Porsche
                      yang juga memiliki reputasi kuat dan inovasi teknologi.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Flame className="h-16 w-16 md:h-6 md:w-6 text-yellow-500" />
                  <div>
                    <h3 className="font-semibold">Peraturan Lingkungan</h3>
                    <p>
                      Meningkatnya regulasi terkait emisi karbon dan tekanan
                      untuk beralih ke teknologi ramah lingkungan bisa menjadi
                      tantangan bagi Ferrari yang terkenal dengan mesin bensin
                      berperforma tinggi.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <BadgeDollarSign className="h-16 w-16 md:h-6 md:w-6 text-yellow-500" />
                  <div>
                    <h3 className="font-semibold">Fluktuasi Ekonomi Global</h3>
                    <p>
                      Perubahan kondisi ekonomi global yang signifikan, seperti
                      resesi, dapat mengurangi daya beli konsumen kelas atas
                      yang menjadi target Ferrari.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="mx-4 md:mx-0">
            <CardHeader>
              <CardTitle>Kesimpulan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Analisis ini memberikan gambaran tentang kekuatan Ferrari
                sebagai merek mewah yang prestisius dan inovatif, namun juga
                menunjukkan tantangan dari pasar terbatas dan perubahan tren
                global.
              </p>
              <Button className="mt-4">Learn More</Button>
            </CardContent>
          </Card>
          <Card className="mx-4 md:mx-0">
            <CardHeader>
              <CardTitle>Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <p>ShadCN, TailwindCSS, v0.dev</p>
              <Button className="mt-4">Learn More</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

export default App;
