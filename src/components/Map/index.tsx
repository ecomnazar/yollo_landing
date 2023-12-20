import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
const Map = () => {
    return (
    <MapContainer
            attributionControl={false}
            center={[37.969908, 58.320069]}
            zoom={14}
            style={{ width: "100%", height: "100%", borderRadius: '10px' }}
          >
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[37.969908, 58.320069]}>
              {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
            </Marker>
          </MapContainer>

  )
}

export default Map