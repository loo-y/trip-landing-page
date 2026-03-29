import { CalendarDays, Clock3, MapPinned, Star } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export const featuredDealZh = {
  title: "12 天歐洲精華跟團遊，含瑞士阿爾卑斯景觀段",
  summary:
    "主推 2026 年度熱門產品，包含機票、精選酒店、經典城市行程與多語言導覽，適合首次規劃歐洲團體旅遊的用戶。",
  price: "USD 2,399",
  departure: "香港 / 新加坡 出發",
  dates: "2026 年 5 月至 10 月",
  duration: "12 天",
  rating: "4.9",
  reviews: "1,842 則評價",
  image:
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80",
};

export const dealsZh = [
  {
    title: "經典歐洲七國跟團遊",
    price: "USD 1,599",
    tag: "熱門",
    departure: "香港出發",
    duration: "10 天",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "瑞士群峰與科莫湖小團行程",
    price: "USD 1,899",
    tag: "小團推薦",
    departure: "新加坡出發",
    duration: "8 天",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "法國義大利浪漫假期",
    price: "USD 2,180",
    tag: "含機票",
    departure: "香港出發",
    duration: "11 天",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "北歐首都與極光延伸行程",
    price: "USD 2,280",
    tag: "季節限定",
    departure: "新加坡出發",
    duration: "9 天",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "伊比利半島海岸文化之旅",
    price: "USD 1,730",
    tag: "新品",
    departure: "香港出發",
    duration: "8 天",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "巴爾幹半島精選路線",
    price: "USD 1,680",
    tag: "高性價比",
    departure: "新加坡出發",
    duration: "9 天",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "蘇格蘭高地與愛丁堡鐵道行程",
    price: "USD 1,920",
    tag: "鐵道",
    departure: "香港出發",
    duration: "7 天",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "中歐聖誕市集冬季假期",
    price: "USD 1,560",
    tag: "冬季",
    departure: "新加坡出發",
    duration: "6 天",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80",
  },
];

export const seoFaqsZh = [
  {
    question: "這些優惠產品一般包含哪些內容？",
    answer:
      "多數產品包含酒店住宿、部分交通、導覽行程與清楚標示的套裝內容。部分熱門產品也會包含來回機票或簽證相關資訊。",
  },
  {
    question: "這頁面適合第一次出國跟團的旅客嗎？",
    answer:
      "適合。主推產品通常會優先展示節奏清晰、覆蓋面高、安排相對省心的路線，方便第一次規劃歐洲或日本團體旅遊的用戶比較。",
  },
  {
    question: "之後可以依出發地、預算或月份做不同 SEO 頁面嗎？",
    answer:
      "可以。這個 deals 模板可以延伸成不同出發地、目的地、價格區間與季節主題的 SEO 投放頁，維持同一套版型與模組結構。",
  },
];

const reviewsZh = [
  {
    name: "香港旅客 Iris",
    quote:
      "這種頁面比純宣傳型 landing page 更容易看，我可以很快比較價格、標籤和出發資訊。",
  },
  {
    name: "新加坡旅客 Marcus",
    quote:
      "主推卡片先幫我聚焦，但下面的產品也夠多，不會只看到一個方案就被迫點進去。",
  },
  {
    name: "倫敦旅客 Sofia",
    quote:
      "產品資訊、價格和適合人群都很靠近卡片本身，對比起來比較像在挑商品，而不是看一整頁廣告。",
  },
];

const editorialSectionsZh = [
  {
    title: "如何挑選適合自己的跟團優惠",
    body:
      "先看天數，再比較是否含機票、酒店等級、是否有導遊與接送安排。若是第一次出發，通常節奏較穩、覆蓋重點城市的路線更容易轉化。",
  },
  {
    title: "哪些市場適合做這種 SEO deals 頁",
    body:
      "香港與新加坡出發頁面通常很適合，因為搜尋意圖清楚，價格敏感度高，也更容易延伸成出發地與目的地的長尾關鍵字頁。",
  },
  {
    title: "為什麼純產品卡片還是不夠",
    body:
      "如果只有卡片和價格，頁面語義層會偏薄。補上 FAQ、實用文案與站內延伸連結，能讓搜尋引擎更容易理解頁面主題與使用者意圖。",
  },
];

const relatedLinksZh = [
  "香港出發歐洲跟團遊",
  "新加坡出發日本行程",
  "親子團優惠",
  "含機票假期產品",
  "小團高品質路線",
  "2026 季節限定行程",
];

const chipsZh = ["全部優惠", "歐洲", "日本", "親子", "小團", "含機票", "USD 2,000 以下"];

export function DealsZhPage() {
  return (
    <main className="min-h-screen bg-[#f4f8fc]">
      <section className="border-b border-slate-200 bg-white">
        <div className="shell py-5">
          <div className="overflow-hidden rounded-[1.75rem] bg-[linear-gradient(120deg,#03112d_0%,#0f2e73_55%,#0066ff_100%)] text-white shadow-[0_24px_70px_rgba(3,17,45,0.18)]">
            <div className="grid gap-6 px-6 py-7 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-200">Deals 頁面</p>
                <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-5xl">
                  少一點大 Banner，多一點產品鋪陳。
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                  這個版本偏向 SEO 投放頁：上方只保留短 Banner 做定位，核心重點是主推產品與更密集的產品卡片陳列。
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/56">產品量</p>
                  <p className="mt-2 text-2xl font-bold">80+ 優惠</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/56">出發市場</p>
                  <p className="mt-2 text-2xl font-bold">HK / SG / US</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/56">價格帶</p>
                  <p className="mt-2 text-2xl font-bold">USD 999+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-6">
        <div className="flex flex-wrap gap-3">
          {chipsZh.map((chip, index) => (
            <button
              key={chip}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "bg-primary text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-primary/30 hover:text-slate-950"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </section>

      <section className="shell pb-8">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="grid lg:grid-cols-[1fr_1.05fr]">
              <div className="relative min-h-[320px]">
                <img src={featuredDealZh.image} alt={featuredDealZh.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <Badge className="absolute left-5 top-5">主推產品</Badge>
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">主推推薦</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950">{featuredDealZh.title}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{featuredDealZh.summary}</p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPinned className="h-4 w-4" />
                      {featuredDealZh.departure}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays className="h-4 w-4" />
                      {featuredDealZh.dates}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                      <Clock3 className="h-4 w-4" />
                      {featuredDealZh.duration}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-950 px-4 py-4 text-white">
                    <div className="flex items-center gap-2 text-sm text-white/74">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      {featuredDealZh.rating} · {featuredDealZh.reviews}
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/52">價格起</p>
                    <p className="mt-2 text-3xl font-bold">{featuredDealZh.price}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button size="lg">查看主推產品</Button>
                  <Button variant="ghost" size="lg" className="border border-slate-200 bg-white">
                    收藏清單
                  </Button>
                </div>
              </div>
            </div>
          </article>

          <aside className="grid gap-4">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">頁面方向</p>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-slate-950">
                這是一個更偏商品陳列的 SEO 集合頁。
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Banner 保持短，重點放在主推卡片、價格層級與大量產品卡，讓搜尋流量進來後能快速找到適合的方案。
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_24px_60px_rgba(3,17,45,0.14)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">快速篩選</p>
              <div className="mt-5 space-y-3">
                {[
                  ["出發地", "香港 / 新加坡"],
                  ["出發月份", "2026 彈性日期"],
                  ["預算", "USD 1,000 - 2,500"],
                  ["團型", "親子 / 情侶 / 小團"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/46">{label}</p>
                    <p className="mt-2 text-sm text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="shell pb-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">可選產品</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              產品優先的卡片集合
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {dealsZh.map((deal) => (
            <article
              key={deal.title}
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={deal.image} alt={deal.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
                <Badge className="absolute left-4 top-4">{deal.tag}</Badge>
              </div>
              <div className="space-y-4 p-5">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold leading-tight text-slate-950">{deal.title}</h3>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{deal.departure}</span>
                    <span>{deal.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  {deal.rating}
                </div>
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">價格起</p>
                    <p className="mt-1 text-2xl font-bold text-primary">{deal.price}</p>
                  </div>
                  <Button size="sm">查看產品</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-20">
        <div className="shell grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">SEO 內容模組</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              補足搜尋引擎可理解的內容層
            </h2>
          </div>
          <div className="space-y-5">
            {editorialSectionsZh.map((section) => (
              <article key={section.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-950">{section.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">評價與信任</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              以可閱讀評論取代純輪播
            </h2>
            <div className="mt-8 space-y-4">
              {reviewsZh.map((review) => (
                <blockquote key={review.name} className="rounded-[1.5rem] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                  <p className="text-base leading-7 text-slate-700">{review.quote}</p>
                  <footer className="mt-4 text-sm font-semibold text-slate-950">{review.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">延伸連結</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              站內延伸主題與關聯頁
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {relatedLinksZh.map((link) => (
                <a
                  key={link}
                  href="/"
                  className="rounded-[1.25rem] border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 transition hover:border-primary/25 hover:text-slate-950"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">常見問題</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              針對搜尋長尾需求補足內容
            </h2>
          </div>
          <div className="space-y-4">
            {seoFaqsZh.map((faq) => (
              <article key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
