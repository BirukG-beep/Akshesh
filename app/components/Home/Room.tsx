"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Wifi, Bath, Users, BedDouble, ChevronRight } from "lucide-react";

const rooms = [
  {
    title: "Presidential Room",
    guests: "1 Guest",
    features: ["Wifi", "Clean Toilet And Shower", "Nice Balcony"],
    link: "/rooms/presidential",
  },
  {
    title: "Single/Family",
    guests: "1 Guest",
    features: ["Wifi", "Clean Toilet And Shower"],
    link: "/rooms/single-family",
  },
  {
    title: "Single/Twin",
    guests: "2 Guests",
    features: ["Wifi", "Clean Toilet And Shower"],
    link: "/rooms/single-twin",
  },
  {
    title: "Groups",
    guests: "4 Guests",
    features: ["Wifi", "Clean Toilet And Shower", "2 Bunk Beds"],
    link: "/rooms/groups",
  },
];

export default function RoomCards() {
  const router = useRouter();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        .room-section {
          background: #0f0e0c;
          padding: 5rem 1.5rem 6rem;
          font-family: 'DM Sans', sans-serif;
          color: #f0e8da;
        }

        .room-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .room-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .room-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 300;
          color: #f0e8da;
        }

        .room-subtitle {
          color: #9c8d7a;
          max-width: 600px;
          margin: 1rem auto 0;
          line-height: 1.7;
        }

        .room-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(1, 1fr);
        }

        @media (min-width: 768px) {
          .room-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1280px) {
          .room-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .room-card {
          background: #1e1c19;
          border: 1px solid rgba(200,169,110,0.12);
          border-radius: 22px;
          overflow: hidden;
          transition: 0.3s ease;
        }

        .room-card:hover {
          transform: translateY(-4px);
          border-color: rgba(200,169,110,0.3);
        }

        .room-image {
          height: 180px;
          overflow: hidden;
        }

        .room-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s ease;
        }

        .room-card:hover img {
          transform: scale(1.05);
        }

        .room-content {
          padding: 1.5rem;
        }

        .room-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          margin-bottom: 0.6rem;
          color: #f0e8da;
        }

        .room-guests {
          font-size: 0.85rem;
          color: #9c8d7a;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .room-features {
          margin-top: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: #b9a88e;
        }

        .room-btn {
          margin-top: 1.5rem;
          width: 100%;
          padding: 0.9rem;
          border-radius: 14px;
          border: 1px solid rgba(200,169,110,0.25);
          background: rgba(200,169,110,0.08);
          color: #e2c99a;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .room-btn:hover {
          background: rgba(200,169,110,0.15);
        }
      `}</style>

      <section className="room-section" id="rooms">
        <div className="room-inner">

          {/* HEADER */}
          <div className="room-header">
            <h2 className="room-title">Our Rooms</h2>
            <p className="room-subtitle">
              Comfortable and peaceful rooms designed for relaxation, families,
              group stays, and business travelers.
            </p>
          </div>

          {/* GRID */}
          <div className="room-grid">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                className="room-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="room-image">
                  <img
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                    alt={room.title}
                  />
                </div>

                <div className="room-content">
                  <h3 className="room-name">{room.title}</h3>

                  <div className="room-guests">
                    <Users size={16} />
                    {room.guests}
                  </div>

                  <div className="room-features">
                    {room.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        {f.toLowerCase().includes("wifi") ? (
                          <Wifi size={14} />
                        ) : f.toLowerCase().includes("bunk") ? (
                          <BedDouble size={14} />
                        ) : (
                          <Bath size={14} />
                        )}
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="room-btn"
                    onClick={() => router.push(room.link)}
                  >
                    Request Reservation
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}