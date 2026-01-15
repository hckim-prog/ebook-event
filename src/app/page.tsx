"use client";

import Image from "next/image";

export default function Home() {
  const steps = [
    {
      id: 1,
      title: "사이트 접속하기",
      description: <>한빛+ 사이트 우측 상단의 <span className="font-bold">[교수전용]</span> 아이콘을 클릭해 접속하세요.</>,
      image: "/step-1.jpg",
      zoomOrigin: "origin-top-right",
    },
    {
      id: 2,
      title: "견본도서(전자책) 신청하기",
      description: <><span className="font-bold">[견본신청(전자책)]</span> 항목을 선택한 후, 필요한 도서 및 강의 정보를 입력하고 <span className="font-bold">[신청하기]</span> 버튼을 눌러주세요.</>,
      image: "/step-2.jpg",
      zoomOrigin: "origin-center",
    },
    {
      id: 3,
      title: "전자책 열람하기",
      description: <><span className="font-bold">[마이한빛] &gt; [My콘텐츠] &gt; [전자책]</span> 메뉴에서 신청하신 도서를 바로 열람할 수 있습니다.</>,
      image: "/step-3-final.jpg",
      zoomOrigin: "origin-top-right",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <iframe
            src='https://my.spline.design/retrofuturismbganimation-cVmvihAOXEOjHqzGiZ4as5vD/'
            frameBorder='0'
            width='100%'
            height='100%'
            className="w-full h-full"
            title="Spline 3D Background"
          />
        </div>

        {/* Hero Content Overlay */}
        {/* Hero Content Overlay */}
        <div className="relative z-10 text-center px-4 animate-fade-in-up pointer-events-none flex flex-col items-center w-full">
          <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-7xl mx-auto w-full md:w-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-white drop-shadow-sm whitespace-normal break-keep">
              <span className="text-orange-400">한빛+ 전자책 증정</span> 서비스 오픈
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto mb-12 font-bold leading-relaxed tracking-wide drop-shadow-sm">
              구글 플레이북의 번거로움은 이제 그만.<br />
              한빛+ 사이트에서 신청부터 열람까지,<br />
              끊김 없이 바로 열람하세요.
            </p>
            <div className="pointer-events-auto inline-block">
              <button
                onClick={() => document.getElementById('steps-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-white text-black text-xl rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 shadow-lg"
              >
                알아보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps-section" className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">이용 방법 안내</h2>
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={step.id} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-100 group z-10 bg-gray-200">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className={`object-contain transition-transform duration-700 ease-in-out group-hover:scale-150 ${step.zoomOrigin}`}
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md z-20 pointer-events-none">
                    {step.id}
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed word-keep-all">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-50">
        <div className="max-w-4xl mx-auto">
          <a
            href="https://www.hanbit.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all active:scale-[0.99]"
          >
            전자책 신청하기
          </a>
        </div>
      </div>
    </main>
  );
}
