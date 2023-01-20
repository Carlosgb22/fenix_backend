export default {
    PORT: process.env.PORT || 3000,
    DB: "mongodb+srv://user:pass@clusterX.mongodb.net/db?retryWrites=true&w=majority",
    MQTT_HOST: "mqtts://broker.domain.es",
    MQTT_USERNAME: "",
    MQTT_PASSWORD: "",
    MQTT_TOPICS: {'test1': {qos: 0}, 'test2': {qos: 0}},
}