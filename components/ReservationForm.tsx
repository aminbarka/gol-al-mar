"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  eventType: string;
  date: string;
  time: string;
  guests: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
};

const eventTypes = [
  { value: "cinema", label: "🎬 Sunset Cinema", price: "€12/person" },
  { value: "football", label: "⚽ Football Beach Night", price: "€10/person" },
  { value: "rental", label: "📦 Equipment Rental", price: "€299/day" },
  { value: "private", label: "🎉 Private Beach Event", price: "Custom" },
];

const timeSlots = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

export default function ReservationForm() {
  const [form, setForm] = useState<FormData>({
    eventType: "",
    date: "",
    time: "",
    guests: "2",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const set =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputCls =
    "w-full bg-white/5 border border-orange-900/30 rounded-xl px-4 py-3 text-white placeholder-orange-900/50 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/7 transition-all";

  return (
    <section id="reserve" className="py-28 bg-[#130900] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-orange-700/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold tracking-widest uppercase mb-5">
            Book Your Night
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-5 leading-none">
            Reserve Your{" "}
            <span className="shimmer-text">Golden Hour</span>
          </h2>
          <p className="text-orange-100/50 text-lg">
            Fill in the details and we&apos;ll confirm your spot within the hour.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 px-8 rounded-3xl bg-orange-500/10 border border-orange-500/25"
            >
              <div className="text-7xl mb-6">🌅</div>
              <h3 className="text-3xl font-black text-white mb-4">You&apos;re in!</h3>
              <p className="text-orange-100/60 text-lg mb-3">
                Booking confirmed for{" "}
                <span className="text-orange-400 font-bold">{form.firstName}</span>!
              </p>
              <p className="text-orange-900/60 text-sm mb-8">
                Confirmation goes to{" "}
                <span className="text-orange-400">{form.email}</span> within the hour.
                See you at the beach 🏖️
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ eventType: "", date: "", time: "", guests: "2", firstName: "", lastName: "", email: "", phone: "", notes: "" });
                }}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold rounded-full transition-all transform hover:scale-105"
              >
                Book Another Night
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit}
              className="bg-white/3 border border-orange-900/20 rounded-3xl p-8 sm:p-12 space-y-8"
            >
              {/* Event type */}
              <div>
                <label className="block text-white font-bold mb-4 text-sm tracking-wide">
                  What kind of night? *
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {eventTypes.map((et) => (
                    <label
                      key={et.value}
                      className={`flex items-center justify-between gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                        form.eventType === et.value
                          ? "border-orange-500/60 bg-orange-500/10"
                          : "border-orange-900/20 bg-white/3 hover:border-orange-900/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="eventType"
                          value={et.value}
                          checked={form.eventType === et.value}
                          onChange={set("eventType")}
                          className="accent-orange-500"
                          required
                        />
                        <span className="text-white text-sm font-medium">{et.label}</span>
                      </div>
                      <span className="text-orange-400 text-xs font-bold">{et.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date / Time / Guests */}
              <div className="grid sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-orange-100/50 text-xs font-bold mb-2 uppercase tracking-wide">Date *</label>
                  <input type="date" min={today} value={form.date} onChange={set("date")} required className={inputCls + " [color-scheme:dark]"} />
                </div>
                <div>
                  <label className="block text-orange-100/50 text-xs font-bold mb-2 uppercase tracking-wide">Start Time *</label>
                  <select value={form.time} onChange={set("time")} required className={inputCls + " [color-scheme:dark]"}>
                    <option value="">Pick a time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-orange-100/50 text-xs font-bold mb-2 uppercase tracking-wide">How many? *</label>
                  <input type="number" min="1" max="300" value={form.guests} onChange={set("guests")} required className={inputCls} placeholder="e.g. 4" />
                </div>
              </div>

              {/* Name */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-orange-100/50 text-xs font-bold mb-2 uppercase tracking-wide">First Name *</label>
                  <input type="text" value={form.firstName} onChange={set("firstName")} required placeholder="Your first name" className={inputCls} />
                </div>
                <div>
                  <label className="block text-orange-100/50 text-xs font-bold mb-2 uppercase tracking-wide">Last Name *</label>
                  <input type="text" value={form.lastName} onChange={set("lastName")} required placeholder="Your last name" className={inputCls} />
                </div>
              </div>

              {/* Contact */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-orange-100/50 text-xs font-bold mb-2 uppercase tracking-wide">Email *</label>
                  <input type="email" value={form.email} onChange={set("email")} required placeholder="you@example.com" className={inputCls} />
                </div>
                <div>
                  <label className="block text-orange-100/50 text-xs font-bold mb-2 uppercase tracking-wide">Phone</label>
                  <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+1 000 000 0000" className={inputCls} />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-orange-100/50 text-xs font-bold mb-2 uppercase tracking-wide">Anything else?</label>
                <textarea
                  value={form.notes}
                  onChange={set("notes")}
                  rows={3}
                  placeholder="Special occasion, accessibility needs, pre-order drinks, group size notes..."
                  className={inputCls + " resize-none"}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 disabled:opacity-60 text-white font-black rounded-full text-lg transition-all transform hover:scale-105 shadow-xl shadow-orange-500/25 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Locking in your spot...
                  </>
                ) : (
                  "🌅 Confirm My Reservation"
                )}
              </button>

              <p className="text-center text-orange-900/50 text-xs">
                Free cancellation up to 48h before your evening · No surprise fees
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
