class Event {
  constructor({ title, location = "Online", capacity = 0 }) {
    this.title = title;
    this.location = location;
    this.capacity = capacity;
  }

  static online(title, capacity) {
    return new Event({ title, capacity });
  }

  describe() {
    return `${this.title} at ${this.location} (capacity: ${this.capacity})`;
  }
}

const classEvent = new Event({
  title: "JavaScript Basics",
  location: "Room 4",
  capacity: 20,
});
const webinar = Event.online("Classes in JavaScript", 100);

console.log(classEvent.describe());
console.log(webinar.describe());

