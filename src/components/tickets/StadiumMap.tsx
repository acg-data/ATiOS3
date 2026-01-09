import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Svg, { Path, G, Rect } from 'react-native-svg';

interface StadiumMapProps {
    onSectionSelect: (section: string | null) => void;
    selectedSection: string | null;
    venueType?: 'arena' | 'stadium'; // 'arena' for Celtics/Bruins, 'stadium' for Sox/Pats
}

const StadiumMap: React.FC<StadiumMapProps> = ({ onSectionSelect, selectedSection, venueType = 'arena' }) => {

    const sections = [
        { id: 'floor', label: 'Parquet/Floor', color: '#fbbf24', path: "M50,70 L150,70 L150,130 L50,130 Z" },
        { id: 'loge_lower', label: 'Loge Lower', color: '#3b82f6', path: "M40,60 L160,60 L160,140 L40,140 L40,60 M50,70 L50,130 L150,130 L150,70 L50,70" },
        { id: 'loge_upper', label: 'Loge Upper', color: '#60a5fa', path: "M30,50 L170,50 L170,150 L30,150 L30,50 M40,60 L40,140 L160,140 L160,60 L40,60" },
        { id: 'balcony', label: 'Balcony', color: '#94a3b8', path: "M10,30 L190,30 L190,170 L10,170 L10,30 M30,50 L30,150 L170,150 L170,50 L30,50" },
    ];

    const handlePress = (id: string) => {
        if (selectedSection === id) {
            onSectionSelect(null);
        } else {
            onSectionSelect(id);
        }
    };

    return (
        <View className="items-center justify-center bg-muted/10 rounded-3xl p-4 border border-border/50">
            <View className="w-full aspect-square max-h-[300px]">
                <Svg viewBox="0 0 200 200" width="100%" height="100%">
                    {/* Background Field/Court */}
                    <Rect x="60" y="80" width="80" height="40" fill="#fef3c7" rx="2" opacity={0.3} />

                    {sections.map((section) => (
                        <G key={section.id} onPress={() => handlePress(section.id)}>
                            <Path
                                d={section.path}
                                fill={selectedSection === section.id ? section.color : '#e2e8f0'}
                                stroke={selectedSection === section.id ? '#1e293b' : '#94a3b8'}
                                strokeWidth={selectedSection === section.id ? "2" : "1"}
                                opacity={selectedSection && selectedSection !== section.id ? 0.3 : 1}
                            />
                        </G>
                    ))}
                </Svg>
            </View>

            {/* Legend */}
            <View className="flex-row flex-wrap justify-center mt-4 gap-2">
                {sections.map((section) => (
                    <TouchableOpacity
                        key={section.id}
                        onPress={() => handlePress(section.id)}
                        className={`px-3 py-1 rounded-full border ${selectedSection === section.id
                                ? 'bg-primary border-primary'
                                : 'bg-white border-border'
                            }`}
                    >
                        <Text className={`text-[10px] font-bold ${selectedSection === section.id ? 'text-primary-foreground' : 'text-muted-foreground'
                            }`}>
                            {section.label}
                        </Text>
                    </TouchableOpacity>
                ))}
                {selectedSection && (
                    <TouchableOpacity
                        onPress={() => onSectionSelect(null)}
                        className="px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20"
                    >
                        <Text className="text-[10px] font-bold text-destructive">Clear Filter</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default StadiumMap;
