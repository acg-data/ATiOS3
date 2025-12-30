import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { useUserStore } from '../stores';
import { Button } from '../components/common';
import { COLORS, SPACING, FONT_SIZES, APP_CONFIG } from '../utils/constants';

const ProfileScreen: React.FC = () => {
  const { user, isAuthenticated, isLoading, login, register, logout } = useUserStore();
  
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const handleSubmit = async () => {
    if (isLoginMode) {
      await login({ email, password });
    } else {
      await register({ email, password, firstName, lastName });
    }
  };
  
  const handleLogout = async () => {
    await logout();
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };
  
  if (isAuthenticated && user) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user.firstName[0]}{user.lastName[0]}
            </Text>
          </View>
          <Text style={styles.userName}>
            {user.firstName} {user.lastName}
          </Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
        
        {/* Menu Items */}
        <View style={styles.menuSection}>
          <MenuItem title="My Tickets" onPress={() => {}} />
          <MenuItem title="Payment Methods" onPress={() => {}} />
          <MenuItem title="Order History" onPress={() => {}} />
          <MenuItem title="Notifications" onPress={() => {}} />
          <MenuItem title="Help & Support" onPress={() => {}} />
          <MenuItem title="About Ace Ticket" onPress={() => {}} />
        </View>
        
        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        
        {/* App Info */}
        <Text style={styles.appInfo}>
          {APP_CONFIG.name} v{APP_CONFIG.version}
        </Text>
      </ScrollView>
    );
  }
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>{APP_CONFIG.name}</Text>
        <Text style={styles.tagline}>Great Seats. Great Prices.</Text>
      </View>
      
      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.formTitle}>
          {isLoginMode ? 'Sign In' : 'Create Account'}
        </Text>
        
        {!isLoginMode && (
          <>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor={COLORS.textSecondary}
              value={firstName}
              onChangeText={setFirstName}
              autoCapitalize="words"
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor={COLORS.textSecondary}
              value={lastName}
              onChangeText={setLastName}
              autoCapitalize="words"
            />
          </>
        )}
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={COLORS.textSecondary}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={COLORS.textSecondary}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Button
          title={isLoginMode ? 'Sign In' : 'Create Account'}
          onPress={handleSubmit}
          isLoading={isLoading}
          style={styles.submitButton}
        />
        
        <TouchableOpacity
          style={styles.toggleMode}
          onPress={() => setIsLoginMode(!isLoginMode)}
        >
          <Text style={styles.toggleModeText}>
            {isLoginMode
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Sign In'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const MenuItem: React.FC<{ title: string; onPress: () => void }> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Text style={styles.menuItemText}>{title}</Text>
    <Text style={styles.menuItemArrow}>›</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  scrollContent: {
    paddingBottom: SPACING.xxl
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: SPACING.xxl
  },
  logoText: {
    fontSize: 32,
    color: COLORS.primary,
    ...{
      fontWeight: '700' as const
    }
  },
  tagline: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs
  },
  form: {
    padding: SPACING.lg
  },
  formTitle: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: SPACING.lg,
    ...{
      fontWeight: '700' as const
    }
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: SPACING.md,
    fontSize: FONT_SIZES.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.divider
  },
  submitButton: {
    marginTop: SPACING.md
  },
  toggleMode: {
    alignItems: 'center',
    marginTop: SPACING.lg
  },
  toggleModeText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.primary
  },
  profileHeader: {
    alignItems: 'center',
    padding: SPACING.xl,
    backgroundColor: COLORS.white
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md
  },
  avatarText: {
    fontSize: 28,
    color: COLORS.white,
    ...{
      fontWeight: '700' as const
    }
  },
  userName: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.text,
    ...{
      fontWeight: '700' as const
    }
  },
  userEmail: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    marginTop: 4
  },
  menuSection: {
    backgroundColor: COLORS.white,
    marginTop: SPACING.md
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider
  },
  menuItemText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text
  },
  menuItemArrow: {
    fontSize: 20,
    color: COLORS.textSecondary
  },
  logoutContainer: {
    padding: SPACING.lg
  },
  logoutButton: {
    backgroundColor: COLORS.error,
    padding: SPACING.md,
    borderRadius: 8,
    alignItems: 'center'
  },
  logoutButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.md,
    ...{
      fontWeight: '600' as const
    }
  },
  appInfo: {
    textAlign: 'center',
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginTop: SPACING.lg
  }
});

export default ProfileScreen;
