import React, { useState } from 'react'
import { Pressable ,Image} from 'react-native'
import { XStack, YStack, Text, Card, Button } from 'tamagui'
import Animated, { SlideInLeft, SlideInRight } from 'react-native-reanimated'
import { FlatList } from 'react-native-gesture-handler'
import Customheader from './Customheader'


const moods = [
  { label: 'Happy', emoji: '😊', count: '2.3k' },
  { label: 'Romantic', emoji: '😘', count: '1.1k' },
  { label: 'Sad', emoji: '😞', count: '1.5k' },
  { label: 'Neutral', emoji: '😐', count: '900' },
  { label: 'Excited', emoji: '🤩', count: '3.2k' },
]

const groupeddata = [
  {
    date: "2025-08-31",
    location: "india,kerala",
    descritpion: "You were around a serene atmosphere",
    image: [
     require( "../assets/uploads/1.webp"),
     require( "../assets/uploads/2.webp"),
     require( "../assets/uploads/3.webp"),
     require( "../assets/uploads/4.webp"),
     require( "../assets/uploads/5.webp"),
     require( "../assets/uploads/6.webp"),
     require( "../assets/uploads/7.webp")
    ]
  },
  {
    date: "2025-08-30",
    location: "india,kerala",
    descritpion: "You were around a serene atmosphere",
    image: [
     require( "../assets/uploads/8.webp"),
     require( "../assets/uploads/9.webp"),
     require( "../assets/uploads/10.webp"),
     require( "../assets/uploads/1.jpg"),
     require( "../assets/uploads/2.webp"),
     require( "../assets/uploads/4.webp")
    ]
  },
  {
    date: "2025-08-29",
    location: "india,kerala",
    descritpion: "You were around a serene atmosphere",
    image: [
     require( "../assets/uploads/1.webp"),
     require( "../assets/uploads/2.webp"),
     require( "../assets/uploads/3.webp"),
     require( "../assets/uploads/4.webp"),
     require( "../assets/uploads/5.webp"),
     require( "../assets/uploads/6.webp"),
     require( "../assets/uploads/7.webp")
    ]
  },
  {
    date: "2025-08-28",
    location: "india,kerala",
    descritpion: "You were around a serene atmosphere",
    image: [
     require( "../assets/uploads/8.webp"),
     require( "../assets/uploads/9.webp"),
     require( "../assets/uploads/10.webp"),
     require( "../assets/uploads/1.jpg"),
     require( "../assets/uploads/2.webp"),
     require( "../assets/uploads/4.webp")
    ]
  }
]


const Home = () => {
  const [index, setIndex] = useState(2) 
  const [direction, setDirection] = useState('')
    const [showmore,setshowmore]=useState([])






const renderItem = ({ item }) => {
 
  return (
    <Card elevate size="$4" bordered m="$2" >
     
      <Card.Header >
        <XStack alignItems="center" justifyContent='space-between'>
        <YStack >
        <Text fontSize="$4" fontWeight="700" color="#333">
          {item.date}
        </Text>
                <Text fontSize="$3" fontWeight="300" color="#070000ff">
          📍{item.location}
        </Text>
       
        </YStack>
        <YStack alignItems={'center'} ml={10}>
          <Text fontSize={25} >😊</Text>
           <Text>Feeling of the day</Text>
        </YStack>
        <YStack  marginStart={70}  >
          <Text fontSize={25}>⋮</Text>
        
        
        </YStack>
       

        </XStack>
             <Text>_______________________________________________</Text>

      </Card.Header>


  
        <XStack flexWrap="wrap" gap="$3" flex={1} justifyContent="center" height={showmore.includes(item.date)?'auto':130} overflow={'hidden'} padding={3}>
          {item.image.map((img, idx) => (
            <Card
              key={idx}
              elevate  
              paddingHorizontal="$0.25"
             
     
            >
              <Image
                source={img}
                style={{ width: 70, height: 120, resizeMode: 'cover'}}
              />
            </Card>
          ))}
        </XStack>
      

   
      <Card.Footer padded flexDirection='column' justifyContent={"center"} gap={2}  alignItems='center'>
       
         <Pressable onPress={()=>setshowmore(prev=>prev.includes(item.date)?prev.filter(p=>p!==item.date):[...prev,item.date])}><Text>⬇️ {item.image.length-4} more moments</Text></Pressable>
        
      </Card.Footer>
    </Card>
  )
}







  const handlePrev = () =>
     { setDirection('left')
    setIndex((prev) => (prev > 0 ? prev - 1 : moods.length - 1))
}
  const handleNext = () =>
     {setDirection('right') 
    setIndex((prev) => (prev < moods.length - 1 ? prev + 1 : 0))}

  return (
    <YStack flex={1}>
      <Customheader/>


    <YStack bg="#3DC4AB" p="$4" mt="$2" justifyContent="center" alignItems="center">
      
   
      <Text fontSize="$6" fontWeight="bold" color="black">
        How I’m Feeling Right Now
      </Text>

   
      <XStack alignItems="center" px="$4" width={'100%'} justifyContent='space-between'>
    
        <Pressable onPress={handlePrev}>
          <Text fontSize="$8">←</Text>
        </Pressable>

      
        <YStack alignItems="center"  gap="$2" >
                    <Animated.Text
            key={moods[index].emoji} 
            entering={direction === 'right' ? SlideInLeft : SlideInRight}
            style={{ fontSize: 60 }}
          >
            {moods[index].emoji}
          </Animated.Text>

          <Text fontSize="$5" fontWeight="600">
            {moods[index].label}
          </Text>
          <Text fontSize="$3" color="gray">
            👥 {moods[index].count}
          </Text>
        </YStack>

        <Pressable onPress={handleNext}>
          <Text fontSize="$8">→</Text>
        </Pressable>
      </XStack>
      <XStack justifyContent='space-between' width={'100%'}>
       
          <Text fontSize={"$8"}>{index===0?moods[moods.length-1].emoji:moods[index-1].emoji}</Text>
           <Text fontSize={"$8"}>{index===moods.length-1?moods[0].emoji:moods[index+1].emoji}</Text>
          
      </XStack>
    </YStack>

     <FlatList data={groupeddata} renderItem={renderItem} keyExtractor={(item)=>item.date} keyboardShouldPersistTaps="handled"></FlatList>

    </YStack>
  )
}

export default Home
